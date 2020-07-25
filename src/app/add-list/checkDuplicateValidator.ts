import { AbstractControl, ValidatorFn } from "@angular/forms";

export function checkDuplicateValue(list):ValidatorFn {
  return (control: AbstractControl):{[key: string]: boolean} | null => {
    let check = null
    list.forEach((item, index)=>{
      if(item.ListTitle===control.value){
        check= {
            checkDuplicateValue: {valid: false}
         };
      }
    console.log(item)
    })
    return check
}
}