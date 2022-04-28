import { lensState, LensState } from "@focuson/state";
import { HasPageSelection, ModalButton, PageSelectionContext } from "@focuson/pages";
import { mount } from "enzyme";
import { enzymeSetup } from "./enzymeAdapterSetup";
import { SortCodeLayout } from "../formComponents/sortCodeLayout";



export const a = 1

enzymeSetup ()
describe ( "sortCodeLayout", () => {
  it ( "should put a label on the screen and the three components", () => {
    const comp = mount ( <SortCodeLayout label='MyLabel'><p>C1</p><p>C2</p><p>C3</p></SortCodeLayout> )
    expect ( comp.html () ).toEqual ( `<span>MyLabel<p>C1</p><p>C2</p><p>C3</p></span>` )

  } )
} )