import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import DeleteItem from "./DeleteItem";
import Title from "./styles/Title";
import ItemStyle from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <ItemStyle>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link href={{ pathname: "item", query: { id: item.id } }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>

        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <button>Add To Cart</button>
          <DeleteItem id={item.id}>Delete This Item</DeleteItem>
        </div>
      </ItemStyle>
    );
  }
}
