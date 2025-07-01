// ❓問1-1: jotai から何を import？
import { ___ } from 'jotai';

export type Profile = {
  name: string;
  nickname: string;
  hobby: string;
  comment: string;
};

// ❓ 問1-2: プロファイル状態を型付きで定義しよう
export const profileAtom = ___<Profile>({
  name: '',
  nickname: '',
  hobby: '',
  comment: '',
});
