const input="{[]}";
const isValid=(value)=>{
    while(value.includes('()')||value.includes("{}")||value.includes("[]")){
        value=value.replace("()","");
        value=value.replace("[]","");
        value=value.replace("{}","");
    }
    return value==='';
};
