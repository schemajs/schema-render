export const EventTypes = {
  SetState:"SetState",
  StateChanged:"StateChanged",
  OnChange:"OnChange",
  OnConfirm:"OnConfirm"
}

export class EventNames {
  setStateCmd(path:string){
    return `${EventTypes.SetState}:${path}`
  }
}


export const eventNames = new EventNames()