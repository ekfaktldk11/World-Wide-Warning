class Safety{
    constructor(
        country_nm,
        sfty_notice_id,
        title,
        txt_origin_cn,
        wrt_dt
    ){
        this.country_nm = country_nm;
        this.sfty_notice_id = sfty_notice_id;
        this.title = title;
        this.txt_origin_cn = txt_origin_cn;
        this.wrt_dt = wrt_dt
    }
    showDetail = false
    showDetailHandler(){
        this.showDetail = !this.showDetail
    }

}

export default Safety;