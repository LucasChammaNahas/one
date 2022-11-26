import EventsLogic from './EventsLogic';
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import { Provider } from '../../../../Common/Context/Context';
import useEventsStates from './Core/states';
import handlersFun from './Core/eventHandlers';

export default function EventsPage(props) {
  const states = useEventsStates();
  
  return (
    <Provider states={{states, handlers}}>
      <EventsLogic />
      <Form1 />
      <Form2 />
    </Provider>
  );
}