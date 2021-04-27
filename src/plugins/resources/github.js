import { api as backend, requester } from '@p/backend';

const api = backend.routes.github;

export async function projects(ismobile, user) {
  const resp = await requester({
    url: api.repo.list,
    postData: {
      user,
    },
  });
  if (resp.success) {
    const { repos } = resp.data;
    const slicedRepos = ismobile ? repos.slice(0, 2) : repos.slice(0, 5);
    return {
      success: true,
      data: slicedRepos,
    };
  }
  return {
    success: true,
    data: resp.error,
  };
}

export async function repoData(user, repo) {
  const resp = await requester({
    url: api.repo.data,
    postData: {
      user,
      repo,
    },
  });
  return resp;
}

export async function repoCommits(user, repo, branch, nos, page) {
  const resp = await requester({
    url: api.repo.commits,
    postData: {
      user,
      repo,
      branch,
      nos,
      page,
    },
  });
  if (resp.success) {
    return {
      success: true,
      commits: resp.data.commits,
      error: null,
    };
  }
  return {
    success: false,
    commits: null,
    error: resp.error,
  };
}

export async function repoTopics(user, repo) {
  const resp = await requester({
    url: api.repo.topics,
    postData: {
      user,
      repo,
    },
  });
  if (resp.success) {
    return {
      success: true,
      topics: resp.data,
      error: null,
    };
  }
  return {
    success: false,
    topics: null,
    error: resp.error,
  };
}

export async function repoContents(user, repo, path, branch) {
  const resp = await requester({
    url: api.repo.contents,
    postData: {
      user,
      repo,
      path,
      branch,
    },
  });
  if (resp.success) {
    return {
      success: true,
      contents: resp.data.Contents,
      error: null,
    };
  }
  return {
    success: false,
    contents: null,
    error: resp.error,
  };
}

export async function repoBranches(user, repo) {
  const resp = await requester({
    url: api.repo.branches,
    postData: {
      user,
      repo,
    },
  });
  if (resp.success) {
    return {
      success: true,
      branches: resp.data.branches,
      error: null,
    };
  }
  return {
    success: false,
    branches: null,
    error: resp.error,
  };
}
