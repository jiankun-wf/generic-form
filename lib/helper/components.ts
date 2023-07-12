import type { Component } from "vue";

const ComponentMap = new Map<string, Component>();

export const buildComponentMap = <N extends string, T = Component>(
  components: Array<[N, T]>
) => {
  components.forEach(([name, component]) => {
    ComponentMap.set(name, component as Component);
  });
};

export const addComponent = (
  name: string,
  component: Component,
  overlay = false
) => {
  if (ComponentMap.get(name)) {
    overlay && ComponentMap.set(name, component);
    return;
  }
  ComponentMap.set(name, component);
};

export { ComponentMap };
