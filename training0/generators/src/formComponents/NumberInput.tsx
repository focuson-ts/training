import { CommonStateProps } from '@focuson/form_components'
import { reasonFor } from '@focuson/state'


export interface NumberInputProps<S, Context> extends CommonStateProps<S, number, Context> {
}

export function NumberInput<S, Context> ( props: NumberInputProps<S, Context> ) {
  const { state, ariaLabel, id, mode, name } = props
  const onChange = ( e: any ) => state.setJson ( e.target.value, reasonFor ( 'NumberInput', 'onChange', id ) );
  return <input style={{ width: '30px' }} disabled={mode === 'view'} {...props} value={state.optJson ()} onChange={onChange}/>
}