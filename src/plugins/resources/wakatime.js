import { jsonpRequester } from '@p/axios';

const wakatimeStats = {
  dailyStats:
    'https://wakatime.com/share/@tks18/64f77194-b682-4115-a9e9-8c43be07d016.json',
  languageTrend:
    'https://wakatime.com/share/@tks18/0c4d783e-ccd7-421b-9330-5ae5cbd30847.json',
  editors:
    'https://wakatime.com/share/@tks18/51fe7a20-7425-4fd6-888b-cfbc69a22c1b.json',
};

export async function codingData() {
  const resp = await jsonpRequester(wakatimeStats.dailyStats);
  if (resp.success) {
    const { data } = resp;
    let consolMinutes = 0;
    const dailyData = [];
    data.data.forEach((codeData) => {
      const { hours } = codeData.grand_total;
      const { minutes } = codeData.grand_total;
      const totalMinutes = hours * 60 + minutes;
      dailyData.push(totalMinutes);
      consolMinutes += totalMinutes;
    });
    return {
      success: true,
      data: {
        consolMinutes,
        dailyData,
      },
    };
  }
  return {
    success: false,
    data: null,
  };
}

export async function languageTrend() {
  const resp = await jsonpRequester(wakatimeStats.languageTrend);
  if (resp.success) {
    const { data } = resp;
    const languageTrendData = [];
    const languageTrendLabels = [];
    const languageTrendGradients = [];
    for (let i = 0; i < 5; i++) {
      languageTrendData.push(data.data[i].percent);
      if (data.data[i].name === 'JavaScript') {
        languageTrendLabels.push('JS');
      } else if (data.data[i].name === 'TypeScript') {
        languageTrendLabels.push('TS');
      } else if (data.data[i].name === 'reStructuredText') {
        languageTrendLabels.push('ReST');
      } else if (data.data[i].name === 'Python') {
        languageTrendLabels.push('PY');
      } else if (data.data[i].name === 'Vue.js') {
        languageTrendLabels.push('Vue');
      } else {
        languageTrendLabels.push(data.data[i].name);
      }
      languageTrendGradients.push(data.data[i].color);
    }
    return {
      success: true,
      data: {
        languageTrendData,
        languageTrendLabels,
        languageTrendGradients,
      },
    };
  }
  return {
    success: false,
    data: null,
  };
}

export async function editorsData() {
  const resp = await jsonpRequester(wakatimeStats.editors);
  if (resp.success) {
    const { data } = resp;
    const editorsTrendData = [];
    const editorsTrendLabels = [];
    for (let i = 0; i < 5; i++) {
      editorsTrendData.push(Math.round(data.data[i].percent));
      editorsTrendLabels.push(data.data[i].name);
    }
    return {
      success: true,
      data: {
        editorsTrendData,
        editorsTrendLabels,
      },
    };
  }
  return {
    success: false,
    data: null,
  };
}
