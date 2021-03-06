function updateCategory(className) {
    updateCategoryAlone(className);
    setSearch(className, document.getElementById(className).checked);
    updateOther();
    updateReleases();
}

function updateCategoryAlone(className) {
    var categories = document.getElementsByClassName(className);
    var shown = document.getElementById(className).checked;
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        if (shown) {
            if (category.querySelector('.shown')) {
                category.classList.add('shown');
            }
            else {
                category.classList.remove('shown');
            }
        }
        else {
            category.classList.remove('shown');
        }
    }
}

function updateOther() {
    var categories = document.getElementsByClassName('other');
    var shown = document.getElementById('features').checked && document.getElementById('improvements').checked && document.getElementById('bugfixes').checked && (document.getElementById('oldVersion').value == '');
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        if (shown) {
            category.classList.add('shown');
        }
        else {
            category.classList.remove('shown');
        }
    }
}

function updateOldVersion() {
    setSearch('since', document.getElementById('oldVersion').value);
    updateOldVersionAlone();
    updateCategories();
}

function updateOldVersionAlone() {
    var oldVersion = document.getElementById('oldVersion').value;
    var changes = document.getElementsByClassName('change');
    for (var i = 0; i < changes.length; i++) {
        var since = changes[i].dataset.since;
        if (since == '') continue;
        var n = versionCompare(oldVersion, since, { zeroExtend: true });
        if (n < 0) {
            changes[i].classList.remove('shown');
        }
        else {
            changes[i].classList.add('shown');
        }
    }
}

function updateReleases() {
    var oldVersion = document.getElementById('oldVersion').value;
    var releases = document.getElementsByClassName('release');
    for (var i = 0; i < releases.length; i++) {
        var release = releases[i];
        var n = versionCompare(release.dataset.version, oldVersion, { zeroExtend: true });
        if ((n > 0) && release.querySelector('.category.shown')) {
            release.classList.add('shown');
        }
        else {
            release.classList.remove('shown');
        }
    }
}

function updateCategories() {
    updateCategoryAlone('features');
    updateCategoryAlone('improvements');
    updateCategoryAlone('bugfixes');
    updateOther();

    updateReleases();
}

// Taken from https://stackoverflow.com/a/6832721/2945548
function versionCompare(v1, v2, options) {
    var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.split('.'),
        v2parts = v2.split('.');

    function isValidPart(x) {
        return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d*$/).test(x);
    }

    if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
        return NaN;
    }

    if (zeroExtend) {
        while (v1parts.length < v2parts.length) v1parts.push("0");
        while (v2parts.length < v1parts.length) v2parts.push("0");
    }

    if (!lexicographical) {
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
    }

    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length == i) {
            return 1;
        }

        if (v1parts[i] == v2parts[i]) {
            continue;
        }
        else if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        else {
            return -1;
        }
    }

    if (v1parts.length != v2parts.length) {
        return -1;
    }

    return 0;
}

function setSearch(key, value) {
    if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        history.pushState(null, '', newRelativePathQuery);
    }
}

window.onload = function () {
    if ('URLSearchParams' in window) {
        var s = window.location.search;
        if (s == '') return;
        var searchParams = new URLSearchParams(window.location.search);

        var v = searchParams.get('features');
        if (v == 'false') {
            document.getElementById('features').checked = false;
        }

        v = searchParams.get('improvements');
        if (v == 'false') {
            document.getElementById('improvements').checked = false;
        }

        v = searchParams.get('bugfixes');
        if (v == 'false') {
            document.getElementById('bugfixes').checked = false;
        }

        v = searchParams.get('since');
        console.log(v);
        if (v !== null) {
            document.getElementById('oldVersion').value = v;
        }

        updateOldVersionAlone();
        updateCategories();
    }
}
