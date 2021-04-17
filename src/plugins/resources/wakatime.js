import axios from 'axios';
import jsonpadapter from 'axios-jsonp';

const wakatimeStats = {
  dailyStats:
    'https://wakatime.com/share/@tks18/64f77194-b682-4115-a9e9-8c43be07d016.json',
  languageTrend:
    'https://wakatime.com/share/@tks18/0c4d783e-ccd7-421b-9330-5ae5cbd30847.json',
  editors:
    'https://wakatime.com/share/@tks18/51fe7a20-7425-4fd6-888b-cfbc69a22c1b.json',
};

export async function codingData() {
  return await axios({
    url: wakatimeStats.dailyStats,
    method: 'get',
    adapter: jsonpadapter,
  }).then((response) => {
    if (response && response.status == 200) {
      const data = response.data;
      let consolMinutes = 0;
      const dailyData = [];
      data.data.forEach((codeData) => {
        const hours = codeData.grand_total.hours;
        const minutes = codeData.grand_total.minutes;
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
    } else {
      return {
        success: false,
        data: null,
      };
    }
  });
}

export async function languageTrend() {
  return await axios({
    url: wakatimeStats.languageTrend,
    method: 'get',
    adapter: jsonpadapter,
  }).then((response) => {
    if (response && response.status == 200) {
      const data = response.data;
      const languageTrendData = [];
      const languageTrendLabels = [];
      const languageTrendGradients = [];
      for (let i = 0; i < 5; i++) {
        languageTrendData.push(data.data[i].percent);
        data.data[i].name == 'JavaScript'
          ? languageTrendLabels.push('JS')
          : languageTrendLabels.push(data.data[i].name);
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
    } else {
      return {
        success: false,
        data: null,
      };
    }
  });
}

export async function editorsData() {
  return await axios({
    url: wakatimeStats.editors,
    method: 'get',
    adapter: jsonpadapter,
  }).then((response) => {
    if (response && response.status == 200) {
      const data = response.data;
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
    } else {
      return {
        success: false,
        data: null,
      };
    }
  });
}
