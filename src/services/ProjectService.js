export const GetProjects = async () => {
    const projectsList = [];

    try {
        const response = await fetch('https://api.github.com/users/ariframaps/repos');
        const result = await response.json();
        const filteredResults = result.filter(result => (result.homepage !== null && result.homepage !== ''));

        filteredResults.forEach(repo => {
            const project = {
                name: repo.name,
                description: repo.description,
                topics: repo.topics,
                web_link: repo.homepage,
                thumbnail_url: `https://raw.githubusercontent.com/ariframaps/${repo.name}/master/public/thumbnail.png`
            }
            projectsList.push(project);
        });

        return projectsList;
    } catch (err) {
        const errFetch = [{
            name: err.message,
            description: '-',
            topics: [],
            web_link: '/',
            thumbnail_url: 'https://raw.githubusercontent.com/ariframaps/lead_capture/master/images/features1.png'
        }]
        return errFetch;
    }

}