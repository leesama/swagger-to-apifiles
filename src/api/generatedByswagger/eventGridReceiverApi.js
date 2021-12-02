
// Event grid receiver api
// Event grid receiver
import request from '../utils/request';
// Receive event grid data
export function postEventGridReceiver(data,config = {}){
  return request(
    {
      url: '/event-grid/receiver',
      method: 'POST',
      data,
      ...config
    }
  )
}