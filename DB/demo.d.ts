/* FullCalendar Types */
import type { EventInput } from '@fullcalendar/core';
/* Chart.js Types */
import type { ChartData, ChartOptions } from 'chart.js';

type InventoryStatus =
  | 'INSTOCK'
  | 'LOWSTOCK'
  | 'OUTOFSTOCK'
  | 'ACTIVE'
  | 'INACTIVE'
  | 'LOCKED'
  | 'UNLOCKED';

type Status = 'DELIVERED' | 'PENDING' | 'RETURNED' | 'CANCELLED';

export type LayoutType = 'list' | 'grid';
export type SortOrderType = 1 | 0 | -1;

type CustomEvent = {
  name?: string;
  status?: 'Ordered' | 'Processing' | 'Shipped' | 'Delivered';
  date?: string;
  color?: string;
  icon?: string;
  image?: string;
};

interface ShowOptions {
  severity?: string;
  content?: string;
  summary?: string;
  detail?: string;
  life?: number;
}

type ChartDataState = {
  barData?: ChartData;
  pieData?: ChartData;
  lineData?: ChartData;
  polarData?: ChartData;
  radarData?: ChartData;
};
type ChartOptionsState = {
  barOptions?: ChartOptions;
  pieOptions?: ChartOptions;
  lineOptions?: ChartOptions;
  polarOptions?: ChartOptions;
  radarOptions?: ChartOptions;
};

type AppMailProps = {
  mails: Demo.Mail[];
};

type AppMailSidebarItem = {
  label: string;
  icon: string;
  to?: string;
  badge?: number;
  badgeValue?: number;
};

type AppMailReplyProps = {
  content: Demo.Mail | null;
  hide: () => void;
};

declare namespace Demo {
  interface Task {
    id?: number;
    name?: string;
    description?: string;
    completed?: boolean;
    status?: string;
    comments?: string;
    attachments?: string;
    members?: Member[];
    startDate?: string;
    endDate?: string;
  }

  interface Member {
    name: string;
    image: string;
  }

  interface DialogConfig {
    visible: boolean;
    header: string;
    newTask: boolean;
  }

  interface Mail {
    id: number;
    from: string;
    to: string;
    email: string;
    image: string;
    title: string;
    message: string;
    date: string;
    important: boolean;
    starred: boolean;
    trash: boolean;
    spam: boolean;
    archived: boolean;
    sent: boolean;
  }

  interface User {
    id: number;
    name: string;
    image: string;
    status: string;
    messages: Message[];
    lastSeen: string;
  }

  interface Message {
    text: string;
    ownerId: number;
    createdAt: number;
  }

  //ProductService
  type Product = {
    id?: string;
    code?: string;
    name: string;
    description: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: InventoryStatus;
    rating?: number;
    orders?: ProductOrder[];
    [key: string]:
      | string
      | string[]
      | number
      | boolean
      | undefined
      | ProductOrder[]
      | InventoryStatus;
  };

  type ProductOrder = {
    id?: string;
    productCode?: string;
    date?: string;
    amount?: number;
    quantity?: number;
    customer?: string;
    status?: Status;
  };

  type Payment = {
    name: string;
    amount: number;
    paid: boolean;
    date: string;
  };

  //CustomerService
  type Customer = {
    id?: number;
    name?: string;
    country?: ICountryObject;
    company?: string;
    date: Date;
    status?: string;
    activity?: number;
    balance?: number | string;
    verified?: boolean;
    amount?: number;
    price?: number;
    rating?: number;
    image?: string;
    orders?: Demo.Customer[];
    inventoryStatus?: string;
    representative: {
      name: string;
      image: string;
    };
  };

  interface Event extends EventInput {
    location?: string;
    description?: string;
    tag?: {
      name: string;
      color: string;
    };
  }

  // PhotoService
  type Photo = {
    title: string;
    itemImageSrc?: string | undefined;
    thumbnailImageSrc?: string | undefined;
    alt?: string | undefined;
  };

  type Country = {
    name: string;
    code: string;
  };

  // IconService
  type Icon = {
    icon?: {
      paths?: string[];
      attrs?: [{}];
      isMulticolor?: boolean;
      isMulticolor2?: boolean;
      grid?: number;
      tags?: string[];
    };
    attrs?: [{}];
    properties?: {
      order?: number;
      id: number;
      name: string;
      prevSize?: number;
      code?: number;
    };
    setIdx?: number;
    setId?: number;
    iconIdx?: number;
  };

  // ------------- SENAIA --------------------
  type Usuario = {
    id?: number;
    user_vpa: string;
    email: string;
    password: string;
    ids?: string;
    user_id?: string;
    nome?: string;
    senha?: string;
    telefone?: string;
    cpf?: string;
    firstname?: string;
    lastname?: string;
    user_company?: string;
    user_name?: string;
    user_register?: string;
    user_password?: string;
    user_mail?: string;
    user_phone?: string;
    user_cpf?: string;
    user_pos_id?: string;
    user_levelaccess?: string;
    user_acreditacion?: string;
    user_apikeymobile?: string;
    user_servername?: string;
    user_devicestatus?: string;
    user_keyprivate?: string;
    user_apikeyhardware?: string;
    user_apikeysoftware?: string;
    user_messages?: string;
    user_passwordremote?: string;
    user_groupusers?: string;
    user_issync?: string;
    user_uniqueid?: string;
    user_vpa_id?: string;
    user_key?: string;
    user_name_register?: string;
    user_status?: string;
    user_locked?: string;
    user_key_hardware?: string;
    user_level_access?: string;
    user_token?: string;
    user_public_key?: string;
    user_private_key?: string;
    user_wallet_id?: string;
    user_system_type?: string;
    user_mail_verify?: string;
    user_phone_verify?: string;
    user_professional_type?: string;
    user_gender?: string;
    user_born_date?: string;
    user_nation?: string;
    user_photo_ci?: string;
    user_photo?: string;
    user_bank_name?: string;
    user_bank_user_name?: string;
    user_bank_account?: string;
    user_bank_agency?: string;
    user_bank_user_cpf?: string;
    user_date_register?: string;
    user_otp_verify?: string;
    user_latitude?: string;
    user_longitude?: string;
    user_coordinates?: string;
    user_number_services?: string;
    Status?: string;
    servicos?: string;
    user_issinc?: string;
    counter?: number;
    created_at?: any;
    updated_at?: any;
  };

  type UserCategory = {
    user_id: number | undefined;
    key: number | undefined;
    title: string;
    name: string;
    address: string;
    price: string;
    description: string;
    photo: string;
    star: string;
    reviews: string;
    category: string;
    img: string;
    other: string;
    dollar: string;
    cleaner: string;
    usersCategory_sync: boolean;
  };

  type Propriedad = {
    id?: number;
    created_at?: number;
    updated_at?: number;
    dbversion?: string;
    propriedad_id: string;
    propriedadname: string;
    propriedadpropietario?: string;
    propriedadstatus?: string;
    propriedadsigor: string;
    propriedadsitrap?: string;
    propriedaddepartamento?: string;
    propriedaddistrito?: string;
    propriedadproductors?: string;
    propriedadmail?: string;
    propriedadphone?: string;
  };

  type Productor = {
    id?: number;
    created_at?: number;
    updated_at?: number;
    dbversion?: string;
    productorname: string;
    productor_id: string;
    productortoken?: string;
    productorsitrap?: string;
    productoracreditacion?: string;
    productor_propriedad_id?: string;
    productorpassword?: string;
    productormail?: string;
    productorphone?: string;
    productorissync?: string;
    productordocnroprop?: string;
    productordocdigprop?: string;
    productordocorigabrev?: string;
    productordoctipoabrev?: string;
    productorstatus?: string;
    productormessages?: string;
    productorkeyprivate?: string;
    productorapikeysoftware?: string;
  };

  type Frigorifico = {
    id?: number;
    created_at?: number;
    updated_at?: number;
    dbversion?: string;
    frigorificoname: string;
    frigorifico_id: string;
    frigorificodepartamento?: string;
    frigorificodistrito?: string;
    frigorificokeyprivate?: string;
    frigorificostatus?: string;
  };

  type Tecnico = {
    id: number;
    tecnico_vpa_id: string;
    tecnicoid: string;
    ids?: string;
    tecnico_name?: string;
    tecnico_register?: string;
    tecnico_password?: string;
    tecnico_status?: string;
    tecnicotoken?: string;
    tecnicomessages?: string;
    tecnicomail?: string;
    tecnicophone?: string;
    user_system_type?: string;
    created_at?: number;
    updated_at?: number;
  };

  type Coibfe = {
    id?: number;
    dbversion?: string;
    coibfeid: string;
    coibfekey?: string;
    coibfetoken?: string;
    coibfecodigov?: string;
    coibfedestino: string;
    coibfefinalidad: string;
    coibfetransporte: string;
    coibfeaninovillos: string;
    coibfeAniToros: string;
    coibfeanivacas: string;
    coibfeanivaquillas: string;
    coibfeaniotros: string;
    coibfeanitotal: string;
    coibfeanihilton: string;
    coibfetecnico_vpa_id: string;
    coibfetecniconame: string;
    coibfefrigorificoname: string;
    coibfefrigorifico_id: string;
    coibfeproductorname: string;
    coibfeproductor_id: string;
    coibfeproductorsitrap?: string;
    coibfepropriedadname: string;
    coibfepropriedad_id?: string;
    coibfepropriedadsigor: string;
    coibfepropriedadsitrap?: string;
    coibfepropriedaddepartamento?: string;
    coibfepropriedaddistrito?: string;
    coibfepropriedad_productor_id?: string;
    coibfeprecinto1: string;
    coibfeprecinto2?: string;
    coibfeprecinto3?: string;
    coibfepos_id?: string;
    coibfeposlatitud: string;
    coibfeposlongitud: string;
    coibfeposdate?: string;
    coibfeposapikeymobile?: string;
    coibfeobs?: string;
    coibfedocnroprop?: string;
    coibfedocdigprop?: string;
    coibfedocorigabrev?: string;
    coibfedoctipoabrev?: string;
    coibfeerrocode?: string;
    coibfeerromessage?: string;
    coibfeanimales?: string;
    coibfe_issinc?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Vacuna = {
    id?: string;
    dbversion?: string;
    vacunaId: string;
    vacunaUniqueId?: string;
    vacuna_company?: string;
    vacuna_lote?: string;
    vacuna_codigo?: string;
    vacuna_nome: string;
    vacuna_edad?: string;
    vacuna_caravana?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Salida = {
    id?: string;
    dbversion?: string;
    salidaId: string;
    salida_UniqueId?: string;
    salida_company?: string;
    salida_guia?: string;
    salida_caravana?: string;
    entrada_fecha_entrada?: string;
    entrada_modalidade?: string;
    salida_ms_cab_dia?: string;
    salida_costo_compra?: string;
    salida_costo_diaria?: string;
    salida_costo_curativo?: string;
    salida_costo_protocolo?: string;
    salida_corral?: string;
    salida_peso_entrada?: string;
    salida_categoria?: string;
    salida_angus?: string;
    salida_propietario_origem?: string;
    salida_peso_salida?: string;
    salida_dias_confinamento?: string;
    salida_lote?: string;
    salida_fecha_salida?: string;
    salida_peso_proyectado?: string;
    salida_cms_pv?: string;
    salida_cms_total?: string;
    salida_gmd?: string;
    salida_destino?: string;
    salida_controlador?: string;
    salida_tipo_salida?: string;
    salida_tipo_entrada?: string;
    salida_cantidad?: string;
    salida_nombre_identificaccion?: string;
    salida_custo_total?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Raza = {
    id?: string;
    dbversion?: string;
    razaId: string;
    razaUniqueId?: string;
    raza_company?: string;
    razaIdRaca?: string;
    razaNomeRaca?: string;
    razaOrdemExibicao?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Peso = {
    id?: string;
    dbversion?: string;
    pesoId: string;
    pesoUniqueId?: string;
    peso_company?: string;
    pesoPesoActual?: string;
    pesoPesoFinal?: string;
    pesoPesoEntrada?: string;
    pesoEdad?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Liquidacion = {
    id?: string;
    dbversion?: string;
    liquidacionId: string;
    liquidacionUniqueId?: string;
    liquidacion_company?: string;
    liquidacionGuias?: string;
    liquidacionCantidad?: string;
    liquidacionFaena_kg_total?: string;
    liquidacionPromedio_animal?: string;
    liquidacionPrecio_venta?: string;
    liquidacionFecha_salida?: string;
    liquidacionFecha_faena?: string;
    liquidacionPrecio_kg_carcasa?: string;
    liquidacionPrecio_total?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Identifica = {
    id?: string;
    dbversion?: string;
    identificaId: string;
    identificaUniqueId?: string;
    identifica_company?: string;
    identificaIdAnimal?: string;
    identificaNroTag?: string;
    identificaIdTecnico?: string;
    identificaNumeroIdentificador?: string;
    identificaDataNascimento?: string;
    identificaSexo?: string;
    identificaIdRaca?: string;
    identificaMarcaFogo?: string;
    identificaLatitude?: string;
    identificaLongitude?: string;
    identificaCarimbo?: string;
    identificaLoteVacina?: string;
    identificaPeso?: string;
    identificaCodErro?: string;
    identificaDataIdentificacao?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Guia = {
    id?: string;
    dbversion?: string;
    guiaId: string;
    guiaUniqueId?: string;
    guia_company?: string;
    guiaOrden?: string;
    guiaGuias?: string;
    guiaContrato?: string;
    guiaFechaEntrada?: string;
    guiaCantidad?: string;
    guiaOrigen?: string;
    guiaCategoria?: string;
    guiaCorral?: string;
    guiaModalidad?: string;
    guia_lote?: string;

    guia_qtdy_entrada?: string;
    guia_qtdy_salida?: string;
    guia_entrada_fin?: string;
    guia_salida_fin?: string;

    created_at?: any;
    updated_at?: any;
  };

  type Entrada = {
    id?: string;
    dbversion?: string;
    entradaId: string;
    entrada_UniqueId?: string;
    entrada_nordem?: string;

    entrada_company?: string;
    entrada_guia?: string;
    entrada_lote?: string;
    entrada_caravana?: string;
    entrada_numero_anterior?: string;
    entrada_sigla_anterior?: string;
    entrada_corral_origem?: string;
    entrada_dispositivo_anterior?: string;
    entrada_color_anterior?: string;
    entrada_numero_actual?: string;
    entrada_sigla_actual?: string;
    entrada_dispositivo_actual?: string;
    entrada_color_actual?: string;
    entrada_angus?: string;
    entrada_peso_actual?: string;
    entrada_peso_entrada?: string;
    entrada_categoria?: string;
    entrada_fecha_entrada?: string;
    entrada_fecha_aplicaccion?: string;
    entrada_corral_actual?: string;
    entrada_modalidade?: string;
    entrada_propietario_origem?: string;
    entrada_ms_cab_dia?: string;
    entrada_costo_compra?: string;
    entrada_costo_diario?: string;
    entrada_costo_curativo?: string;
    entrada_costo_protocolo?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Animal = {
    id?: string;
    dbversion?: string;
    animalId: string;
    animalUniqueId?: string;
    animal_nordem?: string;

    animal_company?: string;
    animalNroTag?: string;
    animalDataNascimento?: string;
    animalDataQuarentena?: string;
    animalIdRaca?: string;
    animalSexo?: string;
    animalIdClassificacao?: string;
    animalUltimoPeso?: string;
    animalDataUltimapesagem?: string;
    animalListaNegra?: string;
    animal_raza?: string;
    animal_color?: string;
    animal_edad?: string;
    animalProductor_ID?: string;
    animalPropriedad_ID?: string;
    animalMarcaFuego?: string;

    animal_ms_cab_dia?: string;
    animal_costo_compra?: string;
    animal_costo_diaria?: string;
    animal_costo_curativo?: string;
    animal_costo_protocolo?: string;
    animal_peso_proyectado?: string;
    animal_corral?: string;

    created_at?: any;
    updated_at?: any;
  };

  type General = {
    id?: number;
    generalId: string;
    generalUniqueId?: string;
    general_vacuna?: string;
    general_raza?: string;
    general_classificacion?: string;
    general_dispositivo?: string;
    general_color?: string;
    general_categoria?: string;
    general_modalidad?: string;
    general_destino?: string;
    general_permission?: string;
    general_tipo_salida?: string;
    general_controlador?: string;
    general_corral?: string;
    general_color_tag?: string;
    general_sigla?: string;
    general_propietario?: string;
    general_7?: string;
    general_8?: string;
    general_9?: string;
    general_10?: string;
    general_is_sync?: boolean;
    dbversion?: string;
    created_at?: any;
    updated_at?: any;
  };

  type Modelo = {
    id?: string;
    dadus1: string; // NAME
    dadus2?: string;
    dadus3?: string;
    dadus4?: string;
    dadus5?: string;
    dadus6?: string;
    dadus7?: string;
    dadus8?: string;
    dadus9?: string;
    dadus10?: string;

    dadus11?: string;
    dadus12?: string;
    dadus13?: string;
    dadus14?: string;
    dadus15?: string;
    dadus16?: string;
    dadus17?: string;
    dadus18?: string;
    dadus19?: string;
    dadus20?: string;

    created_at?: any;
    updated_at?: any;
  };

  type Alimento = {
    id?: string;
    alimento_1: string; // NAME
    alimento_2?: string;
    alimento_3?: string;
    alimento_4?: string;
    alimento_5?: string;
    alimento_6?: string;
    alimento_7?: string;
    alimento_8?: string;
    alimento_9?: string;
    alimento_10?: string;

    alimento_11?: string;
    alimento_12?: string;
    alimento_13?: string;
    alimento_14?: string;
    alimento_15?: string;
    alimento_16?: string;
    alimento_17?: string;
    alimento_18?: string;
    alimento_19?: string;
    alimento_20?: string;

    created_at?: any;
    updated_at?: any;
  };

  type Corral = {
    id?: string;
    corral_name?: string;
    corral_id?: string;
    corral_nordem: string;

    corral_ms_cab_dia?: string;
    corral_costo_compra?: string;
    corral_costo_diaria?: string;
    corral_peso_proyectado?: string;

    corral_min?: number;
    corral_max?: number;
    corral_type?: string;
    corral_actualqty?: number;
    corral_maxqty?: number;
    corral_open?: boolean;

    dbversion?: string;

    user_id?: string;
    animal_id?: string;
    productor_id?: string;
    propiedad_id?: string;
    user_company?: string;
    user_updated?: string;
    is_sync?: boolean;

    created_at: any;
    updated_at: any;
  };

  type Numerator = {
    id?: string;

    numerator_sigla?: string;
    numerator_id?: string;
    numerator_name?: string;
    numerator_type?: string;
    numerator_value?: number;
    numerator_free?: string;
    numerator_min?: string;
    numerator_max?: string;
    numerator_sigla_rp_amarillo?: number;
    numerator_sigla_rp_naranja?: number;
    numerator_sigla_rp_blanco?: number;
    numerator_sigla_tn_amarillo?: number;
    numerator_sigla_tn_naranja?: number;
    numerator_sigla_tn_blanco?: number;
    numerator_sigla_tarjeta_amarillo?: number;
    numerator_sigla_tarjeta_naranja?: number;
    numerator_sigla_tarjeta_blanco?: number;

    dbversion?: string;

    user_id?: string;
    animal_id?: string;
    productor_id?: string;
    propiedad_id?: string;
    user_company?: string;
    user_updated?: string;
    is_sync?: boolean;

    created_at: any;
    updated_at: any;
  };

  type Alimento = {
    id?: string;
    alimento_1: string; // NAME
    alimento_2?: string;
    alimento_3?: string;
    alimento_4?: string;
    alimento_5?: string;
    alimento_6?: string;
    alimento_7?: string;
    alimento_8?: string;
    alimento_9?: string;
    alimento_10?: string;

    alimento_11?: string;
    alimento_12?: string;
    alimento_13?: string;
    alimento_14?: string;
    alimento_15?: string;
    alimento_16?: string;
    alimento_17?: string;
    alimento_18?: string;
    alimento_19?: string;
    alimento_20?: string;

    created_at?: any;
    updated_at?: any;
  };

  type Auth = {
    id?: number;
    user_vpa: string;
    email: string;
    password: string;
    ids?: string;
    user_id?: string;
    nome?: string;
    senha?: string;
    telefone?: string;
    cpf?: string;
    firstname?: string;
    lastname?: string;
    user_company?: string;
    user_name?: string;
    user_register?: string;
    user_password?: string;
    user_mail?: string;
    user_phone?: string;
    user_cpf?: string;
    user_pos_id?: string;
    user_levelaccess?: string;
    user_acreditacion?: string;
    user_apikeymobile?: string;
    user_servername?: string;
    user_devicestatus?: string;
    user_keyprivate?: string;
    user_apikeyhardware?: string;
    user_apikeysoftware?: string;
    user_messages?: string;
    user_passwordremote?: string;
    user_groupusers?: string;
    user_issync?: string;
    user_uniqueid?: string;
    user_vpa_id?: string;
    user_key?: string;
    user_name_register?: string;
    user_status?: string;
    user_locked?: string;
    user_key_hardware?: string;
    user_level_access?: string;
    user_token?: string;
    user_public_key?: string;
    user_private_key?: string;
    user_wallet_id?: string;
    user_system_type?: string;
    user_mail_verify?: string;
    user_phone_verify?: string;
    user_professional_type?: string;
    user_gender?: string;
    user_born_date?: string;
    user_nation?: string;
    user_photo_ci?: string;
    user_photo?: string;
    user_date_register?: string;
    user_otp_verify?: string;
    user_latitude?: string;
    user_longitude?: string;
    user_coordinates?: string;
    user_number_services?: string;
    Status?: string;
    servicos?: string;
    user_issinc?: string;
    counter?: number;
    created_at?: any;
    updated_at?: any;
  };

  enum USERSYSTEMTYPE {
    VPA = 'VPA',
    FRIGORIFICO = 'FRIGORIFICO',
    PROPIEDAD = 'PROPIEDAD',
    PRODUCTOR = 'PRODUCTOR',
    SENACSA = 'SENACSA',
    SITRAP = 'SITRAP',
    ASSOCIACION = 'ASSOCIACION',
    PUESTOCONTROL = 'PUESTOCONTROL',
    GERENTE = 'GERENTE',
    UNDEFINED = '----',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    CLIENT = 'CLIENT',
    USER = 'USER',
    ROOT = 'ROOT',
  }
}
