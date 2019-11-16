export interface Patient{
    id:String,
    reg_No:String;
    faculty:String;
    date:Date;
    name:String;
    raddress:String;
    address:String;
    dob:Date;
    sex:String;
    marital_status:String;
    last_school_attend:String;
    parent: { parentName:String; pmobile_No:String; paddress:String;};
    diseases:[];
    operation:String;
    mentioned_problem:String;
    
}