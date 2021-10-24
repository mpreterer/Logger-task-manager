import axios from "axios";

class ApiCall {
  
  private trelloDomain: string;

  constructor() {
    this.trelloDomain = 'https://api.trello.com/1';
  }

  public async instance (url: string, data?: any, config?: any) {
    const token = localStorage.getItem(`trello-auth-token`) || '';
    
    return await axios(`${this.trelloDomain}/${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Authorization':
          `OAuth oauth_consumer_key=\"${process.env.NEXT_PUBLIC_TRELLO_KEY}\", oauth_token=\"${token}\"`
      },
    });
  }
}

export default new ApiCall();