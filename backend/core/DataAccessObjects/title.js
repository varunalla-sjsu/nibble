class titles {
    titles;
    constructor(db) {
        this.titles = db.models['users'];
    }
    async isManager(SearchEmail)
    {
        // console.log(email);
        return await this.titles.findAll({where: {email : SearchEmail}});
    //    console.log(isManager);
    //     console.log("checkRole response" + isManager[0].users);
    //     if (isManager.role ===  "manager")
    //     {
    //         return true;
    //     }
    //     else 
    //     {
    //         return false;
    //     }
    }
    fetchEmployeesUnderManager(query) {
        let dept_no = this.titles.findAll({ where: query});
    }
    getEmployeesAndCount(skip, limit) {
        console.log(this.titles);
        return this.titles.findAndCountAll({ offset: skip, limit: limit });
    }
   
}
module.exports = titles;