import { Item, LabelСategory } from './ItemCategory.syled';

const ItemCategory = ({ onClick, list }) => {
  return (
    <>
      {list.map((item, i) => (
        <Item key={i}>
          <LabelСategory tabIndex={0}>
            <input
              onClick={onClick}
              hidden
              value={item}
              readOnly
              type="radio"
              name="expCategory"
            />
            {item}
          </LabelСategory>
        </Item>
      ))}
    </>
  );
};

export default ItemCategory;
