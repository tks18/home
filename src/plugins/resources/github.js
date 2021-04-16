import axios from '@p/axios';
import { api as backend } from '@p/backend/routes';

const api = backend.github;

export async function projects(ismobile, user) {
  const response = await axios
    .post(api.repo.list, {
      user,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data && resp.data.success) {
        const { repos } = resp.data;
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
  return response;
}

export async function repoData(user, repo) {
  const response = await axios
    .post(api.repo.data, {
      user,
      repo,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data && resp.data.success) {
        return {
          success: true,
          data: resp.data,
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
  return response;
}

export async function repoCommits(user, repo, branch, nos, page) {
  const response = await axios
    .post(api.repo.commits, {
      user,
      repo,
      branch,
      nos,
      page,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data && resp.data.success) {
        return {
          success: true,
          commits: resp.data.commits,
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
  return response;
}

export async function repoTopics(user, repo) {
  const response = await axios
    .post(api.repo.topics, {
      user,
      repo,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data && resp.data.success) {
        return {
          success: true,
          topics: resp.data,
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
  return response;
}

export async function repoContents(user, repo, path, branch) {
  const response = await axios
    .post(api.repo.contents, {
      user,
      repo,
      path,
      branch,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data && resp.data.success) {
        return {
          success: true,
          contents: resp.data.contents,
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
  return response;
}

export async function repoBranches(user, repo) {
  const response = await axios
    .post(api.repo.branches, {
      user,
      repo,
    })
    .then((resp) => {
      if (resp.status === 200 && resp.data && resp.data.success) {
        return {
          success: true,
          branches: resp.data.branches,
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
  return response;
}
