class ApiCall {
  
  private trelloDomain: string;
  private key: string;

  constructor() {
    this.trelloDomain = 'https://api.trello.com/1/';
    this.key = `${process.env.NEXT_PUBLIC_TRELLO_KEY}`;
  }

  public async perform (url: string, data?: any, config?: any) {
    const token = this.getToken();
    const request = await fetch(`${this.trelloDomain}/${url}/?key=${this.key}&token=${token}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json'
      },
    });

    return await request.json();
  }

  public async get (path: string) {
    return await this.perform(`${path}`);
  }

  public async post (path: string, data: any) {
    return await this.perform(`${path}`, data, {
      method: 'POST'
    });
  }

  public async put (path: string, data: any) {
    return await this.perform(`${path}`, data, {
      method: 'PUT'
    });
  }

  public async delete (path: string) {
    return await this.perform(`${path}`, {
      method: 'DELETE'
    });
  }

  private getToken(): string {
    const token: string = localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN_STORAGE_NAME}`) || '';
    return token;
  }
}

export default new ApiCall();