import ILists from '../../../../../../dtos/ILists';

const headerComp = (header: ILists['header']['list']) => {
  return `
    <div class="header">
      <!-- import=image-start -->
      <img src="${header.image}" alt="" />
      <!-- import=image-end -->
      <!-- import=name-start -->
      <h1>${header.name}</h1>
      <!-- import=name-end -->
    </div>
  `;
};

export default headerComp;
