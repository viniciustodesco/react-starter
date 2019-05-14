export interface ModulesBuilder {
  result: any[];
  addModules(modules: any[]): void;
  getFunctions(): any[];
}

const Modules: ModulesBuilder = {
  result: [],
  addModules: function(modules: any) {
    for (let i = 0; i < modules.length; i++) {
      Object.assign(this.result, modules[i]);
      console.log('Module -', modules[i]);
    }
  },
  getFunctions: function() {
    return this.result;
  }
};

export default Modules;
