import Entry from '../models/entry';
import Safety from '../models/safety';
import Policy from '../models/policy';
import Key from '../constants/key';

export const fetchEntry = async (nation, iso) => {
    const loadedData = [];
    let dataExist = false;
    let baseUrl = `http://apis.data.go.kr/1262000/EntranceVisaService2/getEntranceVisaList2?serviceKey=ZrxWpXYf4fPdKrPobaESDZz44r%2FSfwySh%2F0h185OMrbrxgOPSoYXPiTtQBw1f8ZDPSUzUwPqnU8RIdLygbnrMQ%3D%3D&pageNo=1&numOfRows=10&cond[country_nm::EQ]=${nation}&cond[country_iso_alp2::EQ]=${iso}`;

    const response = await fetch(baseUrl, {});

    if (!response.ok) {
        throw new Error("The func 'fetchData' Error");
    };

    const resData = await response.json();
    //console.log(resData);

    if (resData.currentCount > 0) {
        dataExist = true;
        console.log("데이터 push 시작");
        for (const index in resData.data) {
            console.log(index);
            console.log(resData.data[index]);
            loadedData.push(new Entry(
                resData.data[index].country_nm,
                resData.data[index].country_iso_alp2,
                resData.data[index].gnrl_pspt_visa_yn,
                resData.data[index].gnrl_pspt_visa_cn,
                resData.data[index].ofclpspt_visa_yn,
                resData.data[index].ofclpspt_visa_cn,
                resData.data[index].dplmt_pspt_yn,
                resData.data[index].dplmt_pspt_cn,
                resData.data[index].remark
            ))
            console.log(loadedData);
        }
    }
    if (dataExist) return loadedData;
    else return false;
};

export const fetchSafety = async (nation, iso, pgNum) => {
    const loadedData = [];
    let dataExist = false;
    let baseUrl = `http://apis.data.go.kr/1262000/CountrySafetyService2/getCountrySafetyList2?serviceKey=ZrxWpXYf4fPdKrPobaESDZz44r%2FSfwySh%2F0h185OMrbrxgOPSoYXPiTtQBw1f8ZDPSUzUwPqnU8RIdLygbnrMQ%3D%3D&pageNo=${String(pgNum)}&numOfRows=10&cond[country_nm::EQ]=${nation}&cond[country_iso_alp2::EQ]=${iso}`;

    const response = await fetch(baseUrl, {});

    if (!response.ok) {
        throw new Error("The func 'fetchSafety' Error");
    };

    const resData = await response.json();

    if (resData.currentCount > 0) {
        dataExist = true;
        for (const index in resData.data) {
            loadedData.push(new Safety(
                resData.data[index].country_nm,
                resData.data[index].sfty_notice_id,
                resData.data[index].title,
                resData.data[index].txt_origin_cn,
                resData.data[index].wrt_dt
            ))
        }
    }
    if (dataExist) return loadedData;
    else return false;
};

// 주간 일별 확진자
export const fetchWeeklyConfirmed = async (iso) => {
    let baseUrl = `https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid/weeklyRegionalTotalCases/${iso}`
    const res = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            "x-authorization": "6179002e-6646-4852-be37-572758a58cbb",
            "x-rapidapi-key": "27b47f90bamsh0076c9c039efb2ep1ea28fjsn79937e73c16d",
            "x-rapidapi-host": "covid-19-global-tracker-with-regional-data.p.rapidapi.com",
            "useQueryString": true
        }
    });
    return res
}

// 주간 일별 격리해제
export const fetchWeeklyRecoverd = async (iso) => {
    let baseUrl = `https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid/weeklyRegionalRecoverdCases/${iso}`
    const res = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            "x-authorization": "6179002e-6646-4852-be37-572758a58cbb",
            "x-rapidapi-key": "27b47f90bamsh0076c9c039efb2ep1ea28fjsn79937e73c16d",
            "x-rapidapi-host": "covid-19-global-tracker-with-regional-data.p.rapidapi.com",
            "useQueryString": true
        }
    });
    return res
}

// 주간 일별 사망자
export const fetchWeeklyDeceased = async (iso) => {
    let baseUrl = `https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid/weeklyRegionalDeceasedCases/${iso}`
    const res = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            "x-authorization": "6179002e-6646-4852-be37-572758a58cbb",
            "x-rapidapi-key": "27b47f90bamsh0076c9c039efb2ep1ea28fjsn79937e73c16d",
            "x-rapidapi-host": "covid-19-global-tracker-with-regional-data.p.rapidapi.com",
            "useQueryString": true
        }
    });
    return res
}

// 총 확진, 격리해제, 사망
export const fetchDailyTotal = async (iso) => {
    let baseUrl = `https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid/dailyTotals/${iso}`
    const res = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            "x-authorization": "6179002e-6646-4852-be37-572758a58cbb",
            "x-rapidapi-key": "27b47f90bamsh0076c9c039efb2ep1ea28fjsn79937e73c16d",
            "x-rapidapi-host": "covid-19-global-tracker-with-regional-data.p.rapidapi.com",
            "useQueryString": true
        }
    });
    return res
}

export const fetchEntryPolicy = async () => {
    let DOMParser = require('xmldom').DOMParser;
    let baseUrl = `http://apis.data.go.kr/1262000/SafetyNewsList/getCountrySafetyNewsList?serviceKey=ZrxWpXYf4fPdKrPobaESDZz44r%2FSfwySh%2F0h185OMrbrxgOPSoYXPiTtQBw1f8ZDPSUzUwPqnU8RIdLygbnrMQ%3D%3D&numOfRows=100&pageNo=1&title1=%EC%9E%85%EA%B5%AD`;

    const response = await fetch(baseUrl, {});

    let data = await response.text();
    if (!response.ok) {
        throw new Error("The func 'fetchData' Error");
    };

    let xmlDoc = new DOMParser().parseFromString(data, "text/xml");
    let x = xmlDoc.getElementsByTagName("item");
    return x;
}

export const entryDataProcess = (rawData) => {
    let processedList = [];
    for(let k = 0; k < rawData.length; k++){
        let itemData = rawData[k].childNodes;
        let temp = new Policy();
        for (let i = 0; i < itemData.length; i++) {
            switch (itemData[i].nodeName) {
                case "contentHtml":
                    temp.contentHtml = itemData[i].childNodes[0].nodeValue;
                    break;
                case "countryName":
                    temp.countryName = itemData[i].childNodes[0].nodeValue;
                    break;
                case "title":
                    temp.title = itemData[i].childNodes[0].nodeValue;
                    break;
                case "wrtDt":
                    temp.wrtDt = itemData[i].childNodes[0].nodeValue;
                    break;
                default:
                    break
            }
        }
        processedList.push(temp);
    }
    return processedList;
}

export const fetchYoutubeData = async (title) => {

    let optionParams={
        q: title,
        part: "snippet",
        publishedAfter: '2020-01-02T12:31:10.022Z',
        key: Key.youTubeKey,
        maxResults:1
    };

    optionParams.q=encodeURI(optionParams.q);

    let baseUrl = `https://www.googleapis.com/youtube/v3/search?`
    
    for(let element in optionParams){
        baseUrl+=element+"="+optionParams[element]+"&";
    }

    baseUrl=baseUrl.substr(0, baseUrl.length-1);
    
    const res = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json;charset=UTF-8'
        }
    });
    return res
}