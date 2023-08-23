import http from 'services/http'
 import { objectToFormData } from 'utils'

import { IApi } from './types'

export const Register = ({...params}: IApi.Register.Request) =>
  http.post<IApi.Register.Response>('/register', objectToFormData({ ...params}))
