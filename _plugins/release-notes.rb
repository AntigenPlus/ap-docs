require 'yaml'
require 'cgi'

module Jekyll
    class ReleaseNotesGenerator < Generator
        safe true
        priority :normal

        def expand_issue(issue)
            if issue.is_a?(Integer)
                i = {"text" => '#' + issue.to_s, "link" => 'https://github.com/AntigenPlus/antigen-plus/issues/' + issue.to_s}
            elsif (m = /^#(\d+)$/.match(issue))
                i = {"text" => issue, "link" => 'https://github.com/AntigenPlus/antigen-plus/issues/' + m[1]}
            elsif (m = /^([\w\-]+)[\#\/](\d+)$/.match(issue))
                i = {"text" => m[1] + "#" + m[2], "link" => 'https://github.com/AntigenPlus/' + m[1] + '/issues/' + m[2]}
            elsif (m = /^([\w\-]+)\/([\w\-]+)[\#\/](\d+)$/.match(issue))
                i = {"text" => m[1] + '/' + m[2] + "#" + m[3], "link" => 'https://github.com/' + m[1] + '/' + m[2] + '/issues/' + m[3]}
            else
                return nil
            end
            i["html"] = '<a href="' + i["link"] + '">' + CGI::escapeHTML(i["text"]) + '</a>'
            return i
        end

        def expand_change(change)
            if change['tags'].nil?
                change['tags'] = []
            end
            if change['issues'].nil?
                change['issues'] = []
            end
            if change['tags'].include?('internal')
                return nil
            end
            change['issues'] = change['issues'].map { |c| expand_issue(c) }.compact
            puts change['parent']
            return change
        end

        def generate(site)
            # site.pages << ReleaseNotesPage.new(site, site.source, '')

            # Load all of the release notes
            releases = Dir.glob(File.join(site.source, "_release-notes/**/*.yaml")).map { |file|
                YAML.load_file(file)
            }
            # Sort them in reverse order (newest first)
            releases = releases.sort_by { |release| Gem::Version.new(release['version']) }.reverse

            # Expand the changes in each release
            releases.each { |release|
                release['changes'] = release['changes'].map { |change| expand_change(change) }.compact

                release['features'] = release['changes'].select { |c| c['tags'].include?('feature')}
                release['bugfixes'] = release['changes'].select { |c| c['tags'].include?('bugfix')}
                release['improvements'] = release['changes'].select { |c| c['tags'].include?('improvement')}
            }

            site.data['releases'] = releases
        end
    end

    class ReleaseNotesPage < Page
        def initialize(site, base, dir)
            @site = site
            @base = base
            @dir  = dir
            @name = 'rn.html'

            # Load all of the release notes
            # releases = Dir.glob("release-notes/**/*.yaml").map { |file|
            #     YAML.load_file(file)
            # }
            # # Sort them in reverse order (newest first)
            # releases = releases.sort_by { |release| Gem::Version.new(release['version']) }.reverse

            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'release-notes.html')

            self.data['releases'] = 'How about a halibut?'
        end
    end
end
