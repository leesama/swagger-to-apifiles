
// Send Grid Event Receive Controller
// Event  send grid receiver
import request from '../../utils/request';
// Receive send grid data

export function postEventSendGridReceiver(data,config = {}){
  return request(
    {
      url: `/event-send-grid/receiver`,
      method: 'POST',
      data
    },
    {
      ...config
    }
  )
}