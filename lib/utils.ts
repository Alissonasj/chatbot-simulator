import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomMessages(userNamer: string): string {
  const messages = [
    `Obrigado pelo contato, ${userNamer}! A 4blue está pronta para te ajudar.`,
    `${userNamer}, mensagem recebida! A 4blue responderá em breve.`,
    `Sua iniciativa é importante, ${userNamer}. A 4blue está com você!`,
    `Agradecemos a confiança. A 4blue já está analisando.`,
    `Obrigado, ${userNamer}! Em breve a 4blue trará novidades.`,
    `Valeu por falar com a 4blue, ${userNamer}! Já estamos cuidando disso.`
  ];
  const indice = Math.floor(Math.random() * messages.length);

  return messages[indice];
}
