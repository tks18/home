import axios from '@p/axios';

let api = {
  repo: {
    list: 'https://api.github.com/users/tks18/repos?sort=updated&per_page=20',
    data: (repo) => `https://api.github.com/repos/tks18/${repo}`,
    topics: (repo) => `https://api.github.com/repos/tks18/${repo}/topics`,
    contents: (repo, path) =>
      `https://api.github.com/repos/tks18/${repo}/contents${path}`,
    branches: (repo) => `https://api.github.com/repos/tks18/${repo}/branches`,
    commits: (repo) => `https://api.github.com/repos/tks18/${repo}/commits`,
  },
};

export async function projects(ismobile) {
  return await axios
    .get(api.repo.list)
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
      console.log(e);
      return {
        success: true,
        data: null,
        error: e,
      };
    });
}

export async function repoData(repo) {
  return await axios
    .get(api.repo.data(repo))
    .then((resp) => {
      if (resp.status == 200 && resp.data) {
        return {
          success: true,
          data: resp.data,
          error: null,
        };
      } else {
        return {
          success: false,
          data: null,
          error: 'Not Able to Continue',
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        data: null,
        error,
      };
    });
}

export async function repoCommits(repo, branch) {
  return await axios
    .get(api.repo.commits(repo), {
      params: {
        sha: branch,
      },
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data) {
        return {
          success: true,
          commits: resp.data,
          error: null,
        };
      } else {
        return {
          success: false,
          commits: null,
          error: 'Error Fetching the api',
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        commits: null,
        error: error,
      };
    });
}

export async function repoTopics(repo) {
  return await axios
    .get(api.repo.topics(repo), {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data) {
        return {
          success: true,
          topics: resp.data,
          error: null,
        };
      } else {
        return {
          success: false,
          topics: null,
          error: 'Not Able to Continue',
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        topics: null,
        error,
      };
    });
}

export async function repoContents(repo, path, branch) {
  return await axios
    .get(api.repo.contents(repo, path), {
      params: {
        ref: branch,
      },
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data) {
        return {
          success: true,
          contents: resp.data,
          error: null,
        };
      } else {
        return {
          success: false,
          contents: null,
          error: 'Not Able to Continue',
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        contents: null,
        error,
      };
    });
}

export async function repoBranches(repo) {
  return await axios
    .get(api.repo.branches(repo))
    .then((resp) => {
      if (resp.status == 200 && resp.data) {
        return {
          success: true,
          branches: resp.data,
          error: null,
        };
      } else {
        return {
          success: false,
          branches: null,
          error: 'Not Able to Continue',
        };
      }
    })
    .catch((error) => {
      return {
        success: false,
        branches: null,
        error,
      };
    });
}
