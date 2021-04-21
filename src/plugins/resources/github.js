import { axios, api as backend } from '@p/backend';

const api = backend.routes.github;

export async function projects(ismobile, user) {
  const resp = await axios
    .post(api.repo.list, {
      user,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        const { repos } = response.data;
        const slicedRepos = ismobile ? repos.slice(0, 2) : repos.slice(0, 5);
        return {
          success: true,
          data: slicedRepos,
        };
      }
      return {
        success: true,
        data: null,
      };
    })
    .catch((e) => ({
      success: true,
      data: null,
      error: e,
    }));
  return resp;
}

export async function repoData(user, repo) {
  const resp = await axios
    .post(api.repo.data, {
      user,
      repo,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          data: response.data,
          error: null,
        };
      }
      return {
        success: false,
        data: null,
        error: 'Not Able to Continue',
      };
    })
    .catch((error) => ({
      success: false,
      data: null,
      error,
    }));
  return resp;
}

export async function repoCommits(user, repo, branch, nos, page) {
  const resp = await axios
    .post(api.repo.commits, {
      user,
      repo,
      branch,
      nos,
      page,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          commits: response.data.commits,
          error: null,
        };
      }
      return {
        success: false,
        commits: null,
        error: 'Error Fetching the api',
      };
    })
    .catch((error) => ({
      success: false,
      commits: null,
      error,
    }));
  return resp;
}

export async function repoTopics(user, repo) {
  const resp = await axios
    .post(api.repo.topics, {
      user,
      repo,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          topics: response.data,
          error: null,
        };
      }
      return {
        success: false,
        topics: null,
        error: 'Not Able to Continue',
      };
    })
    .catch((error) => ({
      success: false,
      topics: null,
      error,
    }));
  return resp;
}

export async function repoContents(user, repo, path, branch) {
  const resp = await axios
    .post(api.repo.contents, {
      user,
      repo,
      path,
      branch,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          contents: response.data.Contents,
          error: null,
        };
      }
      return {
        success: false,
        contents: null,
        error: 'Not Able to Continue',
      };
    })
    .catch((error) => ({
      success: false,
      contents: null,
      error,
    }));
  return resp;
}

export async function repoBranches(user, repo) {
  const resp = await axios
    .post(api.repo.branches, {
      user,
      repo,
    })
    .then((response) => {
      if (response.status === 200 && response.data && response.data.success) {
        return {
          success: true,
          branches: response.data.branches,
          error: null,
        };
      }
      return {
        success: false,
        branches: null,
        error: 'Not Able to Continue',
      };
    })
    .catch((error) => ({
      success: false,
      branches: null,
      error,
    }));
  return resp;
}
