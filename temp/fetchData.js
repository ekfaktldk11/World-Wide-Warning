import Entry from '../models/entry';
import Safety from '../models/safety';

export const fetchEntry = async (nation, iso) =>{
    const loadedData = [];
    let dataExist = false;
    let baseUrl = `http://apis.data.go.kr/1262000/EntranceVisaService2/getEntranceVisaList2?serviceKey=ZrxWpXYf4fPdKrPobaESDZz44r%2FSfwySh%2F0h185OMrbrxgOPSoYXPiTtQBw1f8ZDPSUzUwPqnU8RIdLygbnrMQ%3D%3D&pageNo=1&numOfRows=10&cond[country_nm::EQ]=${nation}&cond[country_iso_alp2::EQ]=${iso}`;

    const response = await fetch(baseUrl, {});
    
    if (!response.ok) {
        throw new Error("The func 'fetchData' Error");
    };

    const resData = await response.json();
    console.log(resData);

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
    if(dataExist) return loadedData;
    else return false;
};

let DOMParser = require('xmldom').DOMParser;

export const fetchSafety = async (nation, iso, pgNum) =>{
    const loadedData = [];
    let dataExist = false;
    let baseUrl = `http://apis.data.go.kr/1262000/CountrySafetyService2/getCountrySafetyList2?serviceKey=ZrxWpXYf4fPdKrPobaESDZz44r%2FSfwySh%2F0h185OMrbrxgOPSoYXPiTtQBw1f8ZDPSUzUwPqnU8RIdLygbnrMQ%3D%3D&pageNo=${String(pgNum)}&numOfRows=10&cond[country_nm::EQ]=${nation}&cond[country_iso_alp2::EQ]=${iso}`;

    const response = await fetch(baseUrl, {});
    
    if (!response.ok) {
        throw new Error("The func 'fetchData' Error");
    };

    const resData = await response.json();
    console.log(resData);

    if (resData.currentCount > 0) {
        dataExist = true;
        for (const index in resData.data) {
            console.log(resData.data[index]);
            loadedData.push(new Safety(
                resData.data[index].country_nm,
                resData.data[index].sfty_notice_id,
                resData.data[index].title,
                resData.data[index].txt_origin_cn,
                resData.data[index].wrt_dt
            ))
            console.log(resData.data[index].country_nm);
            console.log(loadedData);
        }
    }
    if(dataExist) return loadedData;
    else return false;
};