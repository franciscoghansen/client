import {UsuarioModule} from './usuario/usuario.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client.interceptor';
import {LoginService} from './login/login.service';
import {AppRouting} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {ProdutoModule} from './produto/produto.module';
<<<<<<< HEAD
import {NotaModule} from './nota/nota.module';
import {ItemNotaModule} from './itemNota/itemNota.module';
=======
import {CcustoModule} from './ccusto/ccusto.module';
import {PerfilModule} from './perfil/perfil.module';
import {CpontoModule} from './cponto/cponto.module';
import {AtributoModule} from './atributo/atributo.module';
import {AtributofModule} from './atributof/atributof.module';
import {AtividadeModule} from './atividade/atividade.module';
import {SetorModule} from './setor/setor.module';
import {CargoModule} from './cargo/cargo.module';
import {FuncionarioModule} from './funcionario/funcionario.module';
import {BancohorasModule} from './bancohoras/bancohoras.module';
>>>>>>> 976cccce9c8c9d79575e442bb58cd53e1469ccd2


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    LoginModule,
    HomeModule,
    ProdutoModule,
<<<<<<< HEAD
    NotaModule,
    ItemNotaModule
    
       
=======
    PerfilModule,
    UsuarioModule,
    CcustoModule,
    CpontoModule,
    SetorModule,
    CargoModule,
    FuncionarioModule,
    PerfilModule,
    AtributoModule,
    AtributofModule,
    AtividadeModule,
    BancohorasModule
>>>>>>> 976cccce9c8c9d79575e442bb58cd53e1469ccd2
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


