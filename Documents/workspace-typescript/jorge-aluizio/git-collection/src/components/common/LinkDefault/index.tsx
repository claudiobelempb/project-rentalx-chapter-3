import { LinkHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import { ContainerNavLink } from './Link.module';

type LinkDefaultTypes = LinkHTMLAttributes<HTMLLinkElement>;
type LinkDefaultProps = TypeDefault & LinkDefaultTypes;

export function LinkDefault({ ...props }: LinkDefaultProps) {
  switch (props.target) {
    case '_blank':
      return (
        <a title={props.title} href={props.href} target={props.target}>
          <ContainerNavLink {...props}>{props.children}</ContainerNavLink>
        </a>
      );

    default:
      return (
        <NavLink
          title={props.title}
          to={props.href ? props.href : ''}
          target={props.target}
        >
          <ContainerNavLink {...props}>{props.children}</ContainerNavLink>
        </NavLink>
      );
  }
}

LinkDefault.defaultProps = {
  children: 'Link Default',
  href: '/',
  target: '_self',
};
