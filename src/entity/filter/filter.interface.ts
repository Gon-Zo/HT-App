export interface ISaveFilterDTO extends IFilterDate {
    tagSelectValue: any,
}

export interface IFilterDate {
    startDate: string,
    endDate: string
}
