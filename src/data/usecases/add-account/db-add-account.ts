import { AccountModel, Encrypter, AddAccount, AddAccountModel } from './db-add-account-protocols'
export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter
  ) {}

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve({
      id: 'id',
      name: 'name',
      email: 'email',
      password: 'password'
    }))
  }
}
