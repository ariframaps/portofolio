export const GetProjects = async () => {
    const response = await fetch('https://api.github.com/users/ariframaps/repos');
    const result = await response.json();
    const filteredResults = result.filter(result => result.homepage !== null);

    const projectsList = [];
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
}