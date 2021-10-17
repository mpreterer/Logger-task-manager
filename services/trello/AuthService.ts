class AuthService {

  constructor() {
  }

  public login (): void {
    const loginCallback = `http://localhost:3000/trello/auth`;
    const appName = "Crello";
    const scope = 'read,write';
    const expiration = 'never';

    window.location.href = (
      `https://trello.com/1/authorize?expiration=${expiration}&name=${appName}&scope=${scope}&response_type=token&key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&return_url=${loginCallback}`
    );
  }

  public isLogin (): Boolean {
    const isBrowserSide = typeof window !== 'undefined';

    if (isBrowserSide) {
      const isToken = this.isToken();
      
      return isToken;
    }

    return false;
  }
  
  public saveToken (token: string): void {
    const isBrowserSide = typeof window !== 'undefined';

    if (isBrowserSide) {
      localStorage.setItem(`${process.env.NEXT_PUBLIC_TOKEN_STORAGE_NAME}`, token);
    }
  }

  private isToken (): boolean {
    const token = localStorage.getItem(`${process.env.NEXT_PUBLIC_TOKEN_STORAGE_NAME}`);
    const isToken = Boolean(token);

    return isToken;
  }
}

export default new AuthService();