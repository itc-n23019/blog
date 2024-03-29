import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja';

const ConvertDate = ({ dateISO }) => (
  <time dateTime={dateISO}>
    {format(parseISO(dateISO), 'yyyy年MM月dd日', {
      locale: ja,
    })}
  </time>
);

export default ConvertDate;

