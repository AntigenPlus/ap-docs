function updateCategory(className) {
    updateCategoryAlone(className);
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
    var oldVersion = document.getElementById('oldVersion').value;

    var changes = document.getElementsByClassName('change');
    for (var i = 0; i < changes.length; i++) {
        var parent = changes[i].dataset.parent;
        if (parent == '') continue;
        var n = versionCompare(oldVersion, changes[i].dataset.parent, { zeroExtend: true });
        if (n < 0) {
            changes[i].classList.remove('shown');
        }
        else {
            changes[i].classList.add('shown');
        }
    }

    updateCategories();
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

    updateCategory('features');
    updateCategory('improvements');
    updateCategory('bugfixes');
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
