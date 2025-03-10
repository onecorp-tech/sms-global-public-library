export interface ICreateContact {
  phone: string
  is_enabled: boolean
}

export interface IDeleteContact {
  contact_group_uid: string
  contact_uid: string
}
