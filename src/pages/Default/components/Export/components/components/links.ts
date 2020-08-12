import ILists from '../../../../../../dtos/ILists';

const linksComp = (links: ILists['links']['list']) => {
  const linkList = links
    .map((each) => {
      return `
      <!-- import=link-start -->
      <a href="${each.url}" rel="noopener noreferrer" target="_blank">${each.title}</a>
      <!-- import=link-end -->
      `;
    })
    .join('');

  return `
    <div class="links">
      <div class="holder">
        <!-- import=linklist-start -->
        ${linkList}
        <!-- import=linklist-end -->
      </div>
    </div>
  `;
};

export default linksComp;
