class Entry{
    constructor(
        country_nm, // 국가 이름 
        country_iso_alp2, // iso code 2자리
        gnrl_pspt_visa_yn, // 일반여권 허용
        gnrl_pspt_visa_cn, // 허용 기간
        ofclpspt_visa_yn,
        ofclpspt_visa_cn,
        dplmt_pspt_yn,
        dplmt_pspt_cn,
        remark // 비고
        ){
            this.country_nm = country_nm;
            this.country_iso_alp2 = country_iso_alp2;
            this.gnrl_pspt_visa_yn = gnrl_pspt_visa_yn;
            this.gnrl_pspt_visa_cn = gnrl_pspt_visa_cn;
            this.ofclpspt_visa_yn = ofclpspt_visa_yn;
            this.ofclpspt_visa_cn = ofclpspt_visa_cn;
            this.dplmt_pspt_yn = dplmt_pspt_yn;
            this.dplmt_pspt_cn = dplmt_pspt_cn;
            this.remark = remark;
        }
}

export default Entry;