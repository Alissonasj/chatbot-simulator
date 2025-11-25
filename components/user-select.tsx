'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { User } from '@/types';
import { Dispatch, SetStateAction } from 'react';

const users: User[] = [
  { id: 1, name: '4Blue A' },
  { id: 2, name: '4Blue B' },
  { id: 3, name: '4Blue C' }
];

type UserSelectProps = {
  setFuntionState: Dispatch<SetStateAction<User>>;
};

export default function UserSelect({ setFuntionState }: UserSelectProps) {
  function handleSelectUser(id: string) {
    const userFound = users.find((user) => user.id === Number(id));

    if (userFound) {
      setFuntionState(userFound);
    }
  }

  return (
    <Select onValueChange={handleSelectUser}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Selecione usuário' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Usuários</SelectLabel>
          {users.map((u) => (
            <SelectItem
              key={u.id}
              value={u.id.toString()}
            >
              {u.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
