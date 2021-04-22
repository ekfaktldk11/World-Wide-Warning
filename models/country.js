class Country{
    constructor(nation,iso,flag){
        this.nation = nation;
        this.iso = iso;
        this.flag = flag;
    }
    upperToLower = () => {
        return this.iso.toLowerCase();
    }
}

export default Country;