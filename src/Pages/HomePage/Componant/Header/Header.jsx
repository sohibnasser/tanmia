import SlideImage from "./SlideImage";
import { HeaderWrapper, P, SlideImageWrapper } from "./style";


export default function Header() {
  return (
  
    <HeaderWrapper>
        <SlideImageWrapper>
            <SlideImage />
            <P>Shop online and don't hesitate, we have special offers and great discounts</P>
        </SlideImageWrapper>
        
    </HeaderWrapper>
  
  )
}
