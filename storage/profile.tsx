import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

type user = { fullName: string; idBoards: []; bio: string; avatarUrl: string };

class Profile {
  public user = { fullName: 'Name', countBoards: 0, bio: '', avatarUrl: '' };

  constructor() {
    makeAutoObservable(this);
  }

  public async getData() {
    const response: { data: user } = await axios.get(
      `https://api.trello.com/1/members/me?key=${process.env.NEXT_PUBLIC_TRELLO_KEY}&token=${process.env.TRELLO_TOKEN}`,
    );

    this.updateUser(response.data);
  }

  private updateUser(data: user): void {
    runInAction(() => {
      this.user = {
        fullName: data.fullName,
        countBoards: data.idBoards.length,
        bio: data.bio,
        avatarUrl: `${data.avatarUrl}/170.png`,
      };
    });
  }
}

export default Profile;
