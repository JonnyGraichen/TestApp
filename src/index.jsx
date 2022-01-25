import {Button, NavigationView, Page, contentView, TextView}
from 'tabris';
import {Page2} from './pages/Page2';
import {Page3} from './pages/Page3';

contentView.append(
<NavigationView stretch>
 <Page title='Main Page'>
 <Button left onSelect={
 () => openPage2()}>Open page 2</Button>
 <Button right onSelect={
 () => openPage3()}>Open Page 3</Button>
 </Page>
</NavigationView>
)
function openPage2() {
 $(NavigationView).only().append(
 <Page2 />
 )};
function openPage3() {
  $(NavigationView).only().append(
  <Page3 />
  )};