import axios from '@p/axios';
import { api as backend } from '@p/backend/routes';

let api = backend.github;

export async function projects(ismobile, user) {
  return await axios
    .post(api.repo.list, {
      user,
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.success) {
        let repos = resp.data.repos;
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

export async function repoData(user, repo) {
  return await axios
    .post(api.repo.data, {
      user,
      repo,
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.success) {
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

export async function repoCommits(user, repo, branch, nos, page) {
  return await axios
    .post(api.repo.commits, {
      user,
      repo,
      branch,
      nos,
      page,
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.success) {
        return {
          success: true,
          commits: resp.data.commits,
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

export async function repoTopics(user, repo) {
  return await axios
    .post(api.repo.topics, {
      user,
      repo,
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.success) {
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

export async function repoContents(user, repo, path, branch) {
  return await axios
    .post(api.repo.contents, {
      user,
      repo,
      path,
      branch,
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.success) {
        return {
          success: true,
          contents: resp.data.contents,
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

export async function repoBranches(user, repo) {
  return await axios
    .post(api.repo.branches, {
      user,
      repo,
    })
    .then((resp) => {
      if (resp.status == 200 && resp.data && resp.data.success) {
        return {
          success: true,
          branches: resp.data.branches,
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
