import React, { Component } from "react";
import lmerge from "lodash/merge";

export interface BaseComponentPropsType {
  customStyles?: CustomStyles;
}

export interface CustomStyles {
  root?: any;
}

export default class BaseComponent<
  P extends BaseComponentPropsType,
  S
> extends Component<P, S> {

  constructor(props){
    super(props)
  }

  public static defaultProps: Partial<BaseComponentPropsType> = {
    customStyles: {},
  };

  static options = {
    addGlobalClass: true,
  };

  mergeCustomStyle(defaultStyle: Object, customStyle: Object) {
    if (!customStyle) {
      return defaultStyle;
    }
    return {
      ...defaultStyle,
      ...customStyle,
    };
  }

  getDefaultStyles = () => {
    return {};
  };
  getMergedStyles = () => {
    const defaultStyles = this.getDefaultStyles();
    return this.mergeCustomStyles(defaultStyles);
  };
  mergeCustomStyles(
    defaultStyles: Object,
    customStyles: Object | undefined = this.props.customStyles
  ): any {
    // debug('mergeCustomStyles', { customStyles })
    if (!customStyles) {
      return defaultStyles;
    }
    return lmerge(defaultStyles, customStyles);
  }
}
