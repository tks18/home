import axios from '@p/axios';

let api = {
  projects: 'https://api.github.com/users/tks18/repos?sort=updated&per_page=20',
};

export async function projects(ismobile) {
  return await axios
    .get(api.projects)
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.length > 0) {
        let repos = resp.data;
        let slicedRepos = ismobile ? repos.slice(0, 2) : repos.slice(0, 5);
        return {
          success: true,
          data: slicedRepos,
        };
      } else {
        return {
          success: true,
          data: null,
        };
      }
    })
    .catch((e) => {
      return {
        success: true,
        data: null,
        error: e,
      };
    });
}
