import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksColumns extends Struct.ComponentSchema {
  collectionName: 'components_blocks_columns';
  info: {
    description: '';
    displayName: 'Columns';
    icon: 'apps';
  };
  attributes: {
    columns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    content: Schema.Attribute.Component<'repeatable.inner-columns', true>;
  };
}

export interface BlocksFactAndFigure extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fact_and_figures';
  info: {
    description: '';
    displayName: 'Fact & Figure';
    icon: 'star';
  };
  attributes: {
    content: Schema.Attribute.Component<
      'repeatable.inner-facts-and-figure',
      true
    >;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'monitor';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    ctas: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Blocks;
    imagePosition: Schema.Attribute.Enumeration<
      ['Left', 'Right', 'Background']
    > &
      Schema.Attribute.DefaultTo<'Background'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTextImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_images';
  info: {
    description: '';
    displayName: 'Text-image';
    icon: 'picture';
  };
  attributes: {
    content: Schema.Attribute.Component<'repeatable.inner-text-image', false>;
  };
}

export interface MenuDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_dropdowns';
  info: {
    description: '';
    displayName: 'MenuDropdown';
    icon: 'arrowDown';
  };
  attributes: {
    label: Schema.Attribute.String;
    subMenu: Schema.Attribute.Component<'menu.menu-link', true>;
  };
}

export interface MenuMenuButton extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuPageLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_page_links';
  info: {
    displayName: 'menuPageLink';
    icon: 'file';
  };
  attributes: {
    label: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface RepeatableInnerColumns extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_inner_columns';
  info: {
    displayName: 'Inner columns';
    icon: 'hashtag';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface RepeatableInnerFactsAndFigure extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_inner_facts_and_figures';
  info: {
    description: '';
    displayName: 'Inner fact & figure';
    icon: 'hashtag';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Blocks;
    fact: Schema.Attribute.String;
    figure: Schema.Attribute.Text;
  };
}

export interface RepeatableInnerTextImage extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_inner_text_images';
  info: {
    displayName: 'Inner text-image';
    icon: 'hashtag';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    ctas: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Blocks;
    imagePosition: Schema.Attribute.Enumeration<['Left', 'Right']> &
      Schema.Attribute.DefaultTo<'Right'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'Cta';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['Primary', 'Secondary', 'Tertiary']> &
      Schema.Attribute.DefaultTo<'Primary'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedHeadline extends Struct.ComponentSchema {
  collectionName: 'components_shared_headlines';
  info: {
    description: '';
    displayName: 'Headline';
    icon: 'italic';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titleTag: Schema.Attribute.Enumeration<['H1', 'H2', 'H3', 'H4']> &
      Schema.Attribute.DefaultTo<'H2'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.columns': BlocksColumns;
      'blocks.fact-and-figure': BlocksFactAndFigure;
      'blocks.hero': BlocksHero;
      'blocks.text-image': BlocksTextImage;
      'menu.dropdown': MenuDropdown;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
      'menu.menu-page-link': MenuMenuPageLink;
      'repeatable.inner-columns': RepeatableInnerColumns;
      'repeatable.inner-facts-and-figure': RepeatableInnerFactsAndFigure;
      'repeatable.inner-text-image': RepeatableInnerTextImage;
      'shared.cta': SharedCta;
      'shared.headline': SharedHeadline;
    }
  }
}
