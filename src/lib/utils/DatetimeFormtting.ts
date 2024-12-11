import { formatDistanceToNow, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatHumanReadableDate(utcDate: string): string {  
    const date = parseISO(utcDate); // Преобразуем ISO-строку в объект Date

    return formatDistanceToNow(date, { locale: ru, addSuffix: true });
}